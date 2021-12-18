/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Upvotes from '../../common/ui/Upvotes';
import Tags from '../../common/ui/Tags';
import device from '../../common/MediaQueries';

const Container = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  gap: 24px;

  @media ${device.mobile} {
    width: 100%;
  }

  h3 {
    color: #3a4374;
    cursor: pointer;

    @media ${device.mobile} {
      font-size: 13px;
      line-height: 19px;
    }
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    padding-bottom: 16px;

    @media ${device.mobile} {
      font-size: 13px;
      line-height: 19px;
    }
  }
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.222222px;
    color: #3a4374;
  }
`;

const Comment = styled(FaComment)`
  cursor: pointer;
  color: #cdd2ee;
`;

const MobileCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 16px;
`;

const Feedback = ({ feedback, serverUser, setNotify, setShowAlert }) => (
  <>
    <MediaQuery minWidth={630}>
      <Container className="item-animation">
        <DetailsContainer>
          <Upvotes
            feedback={feedback}
            serverUser={serverUser}
            setShowAlert={setShowAlert}
            setNotify={setNotify}
          />
          <div>
            <h3>
              <Link to={`/feedback-list/${feedback.id}`}>{feedback.title}</Link>
            </h3>

            <p>{feedback.description}</p>
            <Tags text={feedback?.category} />
          </div>
        </DetailsContainer>

        <CommentContainer>
          <Comment />
          <p>{feedback.comments.length}</p>
        </CommentContainer>
      </Container>
    </MediaQuery>

    <MediaQuery maxWidth={630}>
      <Container className="item-animation">
        <DetailsContainer>
          <div>
            <h3>
              <Link to={`/feedback-list/${feedback.id}`}>{feedback.title}</Link>
            </h3>

            <p>{feedback.description}</p>
            <Tags text={feedback?.category} />
          </div>
        </DetailsContainer>

        <MobileCont>
          <Upvotes
            feedback={feedback}
            serverUser={serverUser}
            setShowAlert={setShowAlert}
            setNotify={setNotify}
          />
          <CommentContainer>
            <Comment />
            <p>{feedback.comments.length}</p>
          </CommentContainer>
        </MobileCont>
      </Container>
    </MediaQuery>
  </>
);

export default Feedback;
