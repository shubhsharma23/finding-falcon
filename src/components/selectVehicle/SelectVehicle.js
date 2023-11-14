import React from 'react';
import { FormControl, FormLabel, Radio, RadioGroup, FormControlLabel } from '@mui/material';

const SelectVehicle = (props) => {
  const { idx, state, setState } = props;

  const uniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const renderVehicleOptions = () => {
    return state.selectedList[idx].planet !== '' && (
      <FormControl>
        <FormLabel id={`vehicleListLabel${idx}`}>Vehicle List {idx + 1}</FormLabel>
        <RadioGroup aria-labelledby={`vehicleListLabel${idx}`} name="radio-buttons-group">
          {state.vehicleList.map((vehicleItem) => {
            const vId = uniqueId();
            return (
              <FormControlLabel
                key={vId}
                value={vehicleItem.name}
                control={<Radio />}
                disabled={vehicleItem.total_no <= 0 || state.selectedList[idx].vehicle !== ''}
                label={`${vehicleItem.name} (${vehicleItem.total_no}) Max-Distance: ${vehicleItem.max_distance}`}
                onClick={() => {
                  setState({
                    task: 'selectedListVehical',
                    index: idx,
                    vehicleName: vehicleItem.name,
                  });
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    );
  };

  return <>{renderVehicleOptions()}</>;
};

export default SelectVehicle;
