import { HeaderComponent } from "@components/header";
import { HeaderProps } from "@components/header/props";
import { ContainerComponent } from "@components/wrappers/Container";
import styled from "styled-components/native";

export const Container = styled(ContainerComponent)``;

export const Header = styled(HeaderComponent).attrs(({ theme }) => ({
  elements: {
    containerProps: {
      style: {
        marginTop: theme.spacing.sm.responsive,
        marginBottom: theme.spacing.xxm.responsive,
      },
    },
  },
}))``;
