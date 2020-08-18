import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100vh;
    }

    body {
        background: #F0F0F5;
    }

    #root {
        margin-top: 136px;
        
        @media (max-width: 700px) {
            margin-top: 100px;
        }
    }

    body,
    input,
    button,
    textarea {
        font: 500 1.6rem Poppins;
    }

    cursor: pointer;
`;