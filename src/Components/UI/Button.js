import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #19a7ce;
  color: white;
  background-color: #19a7ce;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background-color: #068da9;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  }
`;

// const Button = (props) => {
//   return (
//     <>
//       <button type={props.type} className="button" onClick={props.onClick}>
//         {props.children}
//       </button>
//     </>
//   );
// };

export default Button;
