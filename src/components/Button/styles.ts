import styled, { css } from "styled-components";
import { IButtonStylezed } from "./types";

export const ButtonContainer = styled.button<IButtonStylezed>`
  background: #565656;
  border-radius: 22px;
  position: relative;
  border: 1px solid #565656;
  color: #ffffff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      width: 50%;
      margin-left: 10%;

    padding: 0.7rem 0.4rem;
      background: #e4105d;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: "";
        width: 100%;
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -5px;
        width: calc(100% + 6px);
        height: calc(100% + 8px);
        border-radius: 22px;
      }
    `}
`;
