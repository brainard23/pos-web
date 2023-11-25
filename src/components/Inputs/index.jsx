import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const TextInput = (props) => {
  const { name, variant, type, errors, control, style, label, onChange } =
    props;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            label={label}
            type={type}
            variant={variant || "outlined"}
            style={style}
            {...field}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
            // onChange={onChange}
          />
        )}
        rules={{
          required: `This is required`,
        }}
      />
    </div>
  );
};

export default TextInput;
