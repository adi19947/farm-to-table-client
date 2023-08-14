import { useState, useCallback, useMemo } from "react";
import Joi from "joi";

interface FormProps {
  initialForm: Record<string, any>; // Adjust the type based on your actual form structure
  schema: Record<string, Joi.Schema>;
  handleSubmit: (data: Record<string, any>) => void;
}

interface FormErrors {
  [key: string]: string | undefined;
}

interface FormValue {
  data: Record<string, any>;
  errors: FormErrors;
}

const useForm = ({ initialForm, schema, handleSubmit }: FormProps) => {
  const [data, setData] = useState(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleReset = useCallback(() => {
    setData(initialForm);
    setErrors({});
  }, [initialForm]);

  const validateProperty = useCallback(
    ({ name, value }: { name: string; value: any }): string | null => {
      const obj = { [name]: value };
      const generateSchema = Joi.object({ [name]: schema[name] });
      const { error } = generateSchema.validate(obj);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  const handleChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = target;
      const errorMessage = validateProperty({ name, value });
      if (errorMessage)
        setErrors((prev) => ({ ...prev, [name]: errorMessage }));
      else
        setErrors((prev) => {
          let obj = { ...prev };
          delete obj[name];
          return obj;
        });

      setData((prev) => ({ ...prev, [name]: value }));
    },
    [validateProperty]
  );

  const validateForm = useCallback((): Joi.ValidationError | null => {
    const schemaForValidate = Joi.object(schema);
    const { error } = schemaForValidate.validate(data);
    if (error) return error;
    return null;
  }, [schema, data]);

  const onSubmit = useCallback(() => {
    handleSubmit(data);
  }, [handleSubmit, data]);

  const value = useMemo<FormValue>(() => {
    return { data, errors };
  }, [data, errors]);

  return {
    value,
    onSubmit,
    handleChange,
    handleReset,
    validateForm,
    setData,
  };
};

export default useForm;
