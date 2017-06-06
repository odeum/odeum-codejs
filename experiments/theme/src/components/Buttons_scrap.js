
const Button = styled.button`
  /* Adjust the Button styling based on the theme */
  &&& {
    
  background: ${(props) => props.theme.background || 'lightblue'}
  border: 2px solid ${(props) => props.theme.background || 'lightblue'}
  color: ${(props) => props.theme.button || 'white'}
  font-family: ${(props) => props.theme.font || 'sans-serif'}

  border-radius: 4px
  padding: 0.5rem 1rem
  text-decoration: none
  font-size: 1rem
  margin: 0 1rem
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);

  &:hover { 
      box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
      background: #014464; 
      background: -moz-linear-gradient(top, #0c5f85, #0b5273 50%, #024869 51%, #003853); 
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0, #0c5f85), color-stop(.5, #0b5273), color-stop(.51, #024869), to(#003853)); 
    }

  &:active { 
          -moz-box-shadow: 0 2px 6px black; 
          -webkit-box-shadow: 0 2px 6px black; 
      }
  }
`

export const Button1 = styled.button`

    background: ${(props) => props.theme.background || 'lightblue'}
	border: 1px solid ${(props) => props.theme.background || 'lightblue'}
	border-radius: 4px;
	cursor: pointer;
	display: inline-block;
	font-weight: 400;
	line-height: 2.3em;
	height: 25px;
	margin-bottom: 0;
	overflow: hidden; 
	padding: 10px 20px;
	text-align: center;
	touch-action: manipulation;
	vertical-align: middle;
	white-space: nowrap;
	-webkit-appearance: none;

	&:hover,
	&:focus,
	&.focus,
	&.is-focus {
		color: ${(props) => props.theme.button || 'white'}
		text-decoration: none;
	}

	&:active,
	&.active,
	&.is-active {
		background-image: none;
		outline: 0;
	}

	&.disabled,
	&[disabled] {
		opacity: .4;
		pointer-events: none;
	}
`



    /*box-shadow: 0 1px 0 rgba(0,0,0,0.1);*/
    /*  background-image: -webkit-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -moz-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -ms-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: -o-linear-gradient(top, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    background-image: linear-gradient(to bottom, ${colors.BUTTON_PRIMARY_HOVER}, #3498db);
    */  

    