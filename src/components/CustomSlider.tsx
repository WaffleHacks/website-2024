import Switch from "@mui/material/Switch";
const CustomSlider = ({ warning }: { warning: boolean }) => (
  <Switch
    sx={{
      '& .MuiSwitch-thumb': {
        color: warning ? '#D66460' : '#A3A3D3',
      }
    }}
  />
)
export default CustomSlider;