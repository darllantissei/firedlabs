import styled from 'styled-components';
import container from '../../tools/container';
import TagFired from '../TagFired';
import TitleFired from '../TitleFired';
import ThumbFired from '../ThumbFired';

export const Text = styled.div`
    padding-top: 10rem;
    max-width: 45%;

    ${TagFired} {
        margin-bottom: 40rem;
    }

    ${TitleFired} {
        margin-bottom: 20rem;
    }
`;

export const BannerFired = styled.section`
    ${container};
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 70vh;
    height: 100vh;
`;

