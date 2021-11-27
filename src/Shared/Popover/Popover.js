// // import Overlay from '@restart/ui/esm/Overlay';
// import { useEffect, useRef, useState } from 'react';
// import { Popover, Overlay, } from 'react-bootstrap'
// import { BiDotsVertical, BiEdit } from 'react-icons/bi';
// import { AiOutlineDelete } from 'react-icons/ai';


// function CustomPopover(props) {
//   const [show, setShow] = useState(false);
//   const [target, setTarget] = useState(null);
//   const ref = useRef(null);

//   const handleClick = (event) => {
//     setShow(!show);
//     setTarget(event.target);
//   };

//   const setSelectedOption = (option, event) => {
//     handleClick(event);
//     props.getSelectedOption(option, props.id, props.message);
//   }

//   return (
//     <div ref={ref}>
//       <button onClick={handleClick} className="option-icon"><BiDotsVertical />
//       </button>
//       <Overlay
//         show={show}
//         target={target}
//         placement="bottom"
//         container={ref}
//         containerPadding={20}
//       >
//         <Popover id="popover-contained">
//           <Popover.Body>
//             <h6 onClick={(event) => setSelectedOption('edit', event)}><BiEdit />Edit</h6>
//             <h6 onClick={(event) => setSelectedOption('delete', event)}><AiOutlineDelete />Delete</h6>
//           </Popover.Body>
//         </Popover>
//       </Overlay>
//     </div>
//   )
// }



// export default CustomPopover;

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const setSelectedOption = (option, event) => {
    setAnchorEl(null);
    props.getSelectedOption(option, props.id, props.message);
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="popover-body">
      {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button> */}
      <MoreVertIcon color="light" aria-describedby={id} variant="contained" onClick={handleClick} className="dot-icon" />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className="popover-text">
          <h6 onClick={(event) => setSelectedOption('edit', event)}><EditIcon />Edit</h6>
          <h6 onClick={(event) => setSelectedOption('delete', event)}><DeleteIcon />Delete</h6>
        </div>
      </Popover>
    </div>
  );
}