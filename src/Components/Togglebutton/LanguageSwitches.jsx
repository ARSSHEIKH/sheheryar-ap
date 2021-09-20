import {useState} from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useDispatch } from 'react-redux';

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: "#151515",
      "&$checked + $track": {
        backgroundColor: "#5d5d5d"
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff"
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});

export default function LanguageSwitches() {
const [lang_toggle, set_lang_toggle] = useState(true);
const dispatch = useDispatch()
  const handleChange = (event) => {
    set_lang_toggle(event.target.checked)
        dispatch({type: lang_toggle})
    
  };

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>{!lang_toggle ? "EN" : "AR"} Mode</Grid>
        <Grid item>
          <FormControlLabel
            control={
              <IOSSwitch
                // checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
              />
            }
          />
        </Grid>
      </Grid>
    </Typography>
  );
}
