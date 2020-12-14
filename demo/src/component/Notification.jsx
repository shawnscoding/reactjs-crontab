import React from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CLOSE_CRON_BOX } from "../../redux/types";

const classes = {
  topModalText: {
    display: "block",
    fontSize: "1.8rem",
    lineHeight: "3rem",
  },
  centerModalText: {
    display: "block",
    fontSize: "2.5rem",
    lineHeight: "3rem",
  },
  header: {
    fontSize: "2.5rem",
  },
};

const PopContent = styled.div`
  width: 800px !important;

  @media screen and (max-width: 450px) {
    width: 100% !important;
  }
`;

const CenterAlertContainer = styled.div`
  max-width: 65rem !important;

  @media screen and (max-width: 450px) {
    max-width: 56rem !important;
  }
`;

const CenterAlertText = styled.span`
  font-size: 1.8rem !important;
  color: #666;

  @media screen and (max-width: 450px) {
    font-size: 1.5rem !important;
  }import Notification from './Notification';

`;

const TopMsgBox = styled.div`
  @keyframes down {
    from {
      top: -500px;
    }
    to {
      top: 0;
    }
  }

  width: 460px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 500;
  background: white;
  animation-name: down;
  animation-duration: 1s;
`;

const Notification = ({ notification,  handleClose }) => {


  const handleOpenWebsite = (link) => {
    window.open(link, "_blank");
  };

  const { btns,  content, header } = notification;

 
    return (
      <TopMsgBox className="login-box">
        <div className="schedule-header">
          <h2 style={classes.header}>
            {header && header}
          </h2>
          <p
            style={{
              padding: "15px 40px",
              lineHeight: "20px",
            }}
            className="mg-txt"
          >
            {content.split("\n").map((line, index) => {
              return (
                <span style={classes.topModalText} key={index}>
                  {line}
                  <br />
                </span>
              );
            })}
          </p>
          <button className="close" type="button" onClick={handleClose}>
            close
          </button>
        </div>

        {btns &&
          btns.length > 0 &&
          btns.map((btn) => {
            const {  url, id } = btn;
              return (
                <div key={id} className="pop-content data-table">
                  <div className="btn-hall">
                    <button
                      type="button"
                      onClick={() => {
                        handleOpenWebsite(url);
                      }}
                    >
                      Open
                    </button>
                  </div>
                </div>
              );
    
          })}

      </TopMsgBox>
    );

};

const mapStateToProps = (state) => ({
  cronBox: state.opener.cronBox,
});

export default connect(mapStateToProps)(Notification);
