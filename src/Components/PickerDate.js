import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';

/**
 * premade component to select a date
 * @prop {string} title - The title of this date picker
 * @prop {string} label - component's label
 * @prop {instanceOf(Date)} value - Default date
 * @prop {func} OnChange - Function to call when the user change the date
 */

export default function PickerDate(props) {
    return (
        <div className={props.title + ' dateContainer'}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker label={props.label} value={props.value} onChange={e => props.OnChange(e)} renderInput={p => <TextField {...p} />}/>
            </LocalizationProvider>
        </div>
    )
}