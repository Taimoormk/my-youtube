// ########## Import Dependencies here ##########
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// ########## Import Screens here ##########

// ########## Import Components here ##########
import VideoListEntry from './VideoListEntry';

export default class VideoList extends Component {

  createList() {
    let { videoList, handleSelectedVideo } = this.props;
    return videoList.map((item, i) => {
      return <VideoListEntry key={i} video={item} handleSelectedVideo={handleSelectedVideo} />
    });
  }

  render() {
    let { videoList } = this.props;
    return (
      <div className="video-list">
        {this.createList()}
      </div>
    );
  }
}

VideoList.propTypes = {
  videoList: PropTypes.array.isRequired,
  handleSelectedVideo: PropTypes.func.isRequired
}