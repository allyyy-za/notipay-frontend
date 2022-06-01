import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#34C2EB",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#13C690",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#34C2EB",
    },
    "&:hover fieldset": {
      borderColor: "#13C690",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#34C2EB",
    },
  },
});

export default function CustomTextField(props) {
  const { name, label, value, error = null, type, className, onChange, defaultValue } = props;
  return (
    <CssTextField
      className={className}
      variant="outlined"
      label={label}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
      {...(error && { error: true, helperText: error })}
    />
  );
}
