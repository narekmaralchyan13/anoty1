 export const selectStyles = {
    control: (base, state) => ({
        backgroundColor: 'white',
        fontFamily: 'Montserrat',
        fontSize: '100%',
        lineHeight: '36px',
        fontWeight: '400',
        textAlign: 'center',
        paddingRight:"5px",
        display:'flex',
        cursor:'pointer',
        justifyContent:'space-between',
        border:'none',
        outline:'none',

    }),
    option: (base, state) => ({
        ...base,
        backgroundColor:  state.isSelected ? "#EFF3F5" :"white",
        fontFamily: 'Montserrat',
        color:  "black" ,
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '24px',
        letterSpacing: '0em',
        cursor:'pointer',
        textAlign: 'left',
        '&:hover': {
            backgroundColor: '#EFF3F5',
        },
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        color: 'black',
        fontSize:'30px',
        padding: '1px',
        cursor: 'pointer',
    }),
    indicatorSeparator: (base, state) => ({
        ...base,
        backgroundColor: 'none',
    }),

};

 export const creatableSelectStyles = {
     control: (base, state) => ({
         ...base,
         backgroundColor: 'none',
         border: 'none',
         outline: 'none',
         fontFamily: 'Montserrat',
         fontSize: '120%',
         fontWeight: '400',
         lineHeight: '36px',
         letterSpacing: '0em',
         textAlign: 'left',
         boxShadow: '0',
         display:"flex",

     }),
     option: (base, state) => ({
         ...base,
         color:state.isDisabled ? '#9E9E9E':'black',
         backgroundColor: state.isDisabled ? '#EFF3F5':'white',
         fontFamily: 'Montserrat',
         fontSize: '16px',
         fontWeight: '400',
         lineHeight: '24px',
         letterSpacing: '0em',
         textAlign: 'left',
         '&:hover': {
             backgroundColor: '#EFF3F5',
         },
     }),
     dropdownIndicator: (base, state) => ({
         ...base,
         color: 'white',
         backgroundColor: 'black',
         fontSize:'24px',
         width: '26px',
         height:'26px',
         display:'flex',
         justifyContent: 'center',
         alignItems:'center',
         borderRadius: '50%',
         cursor: 'pointer',
         '&:hover': {
             color: 'white',
         },
         "&::before": {
             width: '100%',
             height: '100%',

         },
         "&::after": {
             width: '100%',
             height: '100%',
         },
     }),
     indicatorSeparator: (base, state) => ({
         ...base,
         backgroundColor: '#EFF3F5',
     }),
     multiValue: (base, state) => ({
         backgroundColor: '#565656',
         color: 'white',
         borderRadius: '20px',
         display: 'flex',
         padding: '0 10px',
         justifayContent: "space-between",
         alignItems: 'center'
     }),
     multiValueLabel: (base, state) => ({
         fontSize: '70%',
         fontWeight: '400',
         fontFamily: 'Montserrat',
         color: 'white',
         lineHeight: '36px',

     }),
     multiValueRemove: (base, state) => ({
         color: '#565656',
         backgroundColor: 'white',
         borderRadius: '50%',
         width: '16px',
         height: '16px',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         marginRight: '-4px',
         marginLeft: '4px',
         '&:hover': {
             backgroundColor: '#d9d9d9',
             cursor: 'pointer',
         },
     }),

 };
