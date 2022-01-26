import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

const override = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-color: red;
  margin-top: 20%;
`;

const useLoading = () => {
  return <CircleLoader color="#2E8DF1" css={override} size={60} />;
};

export default useLoading;
