import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeightStep: 33,
  textAlign: 'center',
  color: '#FFFFFF', 
  background: 'linear-gradient(180deg, #34C2EB 0%, #13C690 87.5%)',
  '&:hover': {
    background: 'linear-gradient(180deg, #34C2EB 0%, #13C690 87.5%)',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    background: 'linear-gradient(180deg, #34C2EB 0%, #13C690 87.5%)',
  },
});

export default function CustomButton(props) {

    const { className, variant, onClick, ...other  } = props;
    return (
        <CssButton
            className={className}
            variant={variant || "contained"}
            onClick={onClick}
            {...other}
        />
    );
}