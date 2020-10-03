import styled, { css } from 'styled-components';

export const device = {
    // xs: `(min-width: 320px)`,
    sm: `(min-width: 600px)`,
    md: `(min-width: 1024px)`,
    lg: `(min-width: 1680px)`,
    //xl: `(min-width: 1440px)`
};

const Grid = styled.div.attrs((props) => ({
    className: ['c-grid', props.classes]
}))`
    ${(props) =>
        props.align &&
        css`
            align-items: ${props.align ? props.align : 'start'};
        `}

    ${(props) =>
        props.rowCollapse &&
        css`
            grid-row-gap: 0;
            row-gap: 0;
        `}
`;

// do we need a GridRow ?
export const GridRow = styled.div.attrs(() => ({ className: 'c-grid__row' }))`
    ${'' /* display: flex;
    flex-flow: row wrap; */}
`;

export const GridCol = styled.div.attrs(() => ({ className: 'c-grid__col' }))`
    ${(props) =>
        props.align &&
        css`
            align-self: ${props.align ? props.align : 'start'};
        `}

    ${(props) =>
        !props.childMargin
            ? css`
                  > :last-child {
                      margin-bottom: 0;
                  }
              `
            : null}


        ${(props) =>
        props.sm &&
        css`
            @media ${device.sm} {
                grid-column: ${props.sm.start ? props.sm.start + ' / ' : ''}
                    ${props.sm.span
                        ? 'span ' + props.sm.span
                        : props.sm.end
                        ? props.sm.end
                        : ''};
            }
        `}
        ${(props) =>
        props.md &&
        css`
            @media ${device.md} {
                grid-column: ${props.md.start ? props.md.start + ' / ' : ''}
                    ${props.md.span
                        ? 'span ' + props.md.span
                        : props.md.end
                        ? props.md.end
                        : ''};
            }
        `}
        ${(props) =>
        props.lg &&
        css`
            @media ${device.lg} {
                grid-column: ${props.lg.start ? props.lg.start + ' / ' : ''}
                    ${props.lg.span
                        ? 'span ' + props.lg.span
                        : props.lg.end
                        ? props.lg.end
                        : ''};
            }
        `}

`;

export { Grid };
