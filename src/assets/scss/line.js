import { css } from 'emotion'

export default {
  buttonss: css`
    background-color: #4267b2;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 5px;
    position: relative;
    top: -15px;
    left: 60px;
    transform: scale(1, 1.5);
    transition: ease-in-out all 0.5s;
    &:hover {
      background-color: white;
      color: black;
      border: 4px solid #8ab49c;
    }
  `,
}
