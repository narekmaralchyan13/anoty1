 export const selectStyles = {
    control: (base, state) => ({
        backgroundColor: 'white',
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
        borderRadius:'4px'


    }),
    option: (base, state) => ({
        ...base,
        backgroundColor:  state.isSelected ? "#EFF3F5" :"white",
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
         fontSize: '90%',
         fontWeight: '400',
         lineHeight: '36px',
         letterSpacing: '0em',
         textAlign: 'left',
         boxShadow: '0',
         height:"100%",
         display:"flex",
         flexWrap:'nowrap'


     }),
     valueContainer:(base,state)=>({
         width:'100%',
         display:'flex',
         alignItems:"center",
         overflowX:"scroll",
         height:"100%",
         '&::-webkit-scrollbar':{
         display: "none"}
     })
     ,
     option: (base, state) => ({
         ...base,
         color:'black',
         backgroundColor: state.isDisabled ? 'orange':'white',
         fontSize: '16px',
         fontWeight: '400',
         lineHeight: '24px',
         letterSpacing: '0em',
         textAlign: 'left',
         '&:hover': {
             backgroundColor: state.isDisabled ? 'orange':'#EFF3F5',
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
         height:"100%",
        whiteSpace:"nowrap",
         color: 'white',
         borderRadius: '20px',
         display: 'flex',
         padding: '0 10px',
         justifyContent: "center",
         alignItems: 'center'
     }),
     multiValueLabel: (base, state) => ({
         fontSize: '70%',
         fontWeight: '400',
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
