import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FiExternalLink } from  "@react-icons/all-files/fi/FiExternalLink";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      var title = this.props.data.title;
      var description = this.props.data.description;
      var connections = this.props.data.connections;
      var reflection = this.props.data.reflection;
      var image = this.props.data.image;
      var group = this.props.data.group;
      
      if (this.props.data.links) {
        console.log(links)

        var links = function() {
          return (
            <div className="project-post-links">
            <ul class="links">
                {this.props.data.links.map((link, i) =>
                    <li key={i}><a href={link} target="_blank" ><FiExternalLink/></a></li>
                  )}
              </ul>
            </div>
          )
        }

      }

    }

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false
    };

    return (
      <Modal
        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogClassName="my-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <Modal.Body> 
        <span> 
            <div className="small-container" style={{float: "left"}}>
            <GatsbyImage image={getImage(image)}/> 
            </div>
        </span>
        <div>
            <Slider {...settings}>
                  <div className="modal-slide">
                      <h3>Description</h3>
                      <p>{group}</p>
                      <p>{description}</p>
                  </div>

                  <div className="modal-slide">
                      <h3>Reflection</h3>
                      <p>{reflection}</p>
                  </div>

                  <div className="modal-slide">
                      <h3>Connections</h3>
                      <p>{connections}</p>
                  </div>

                  
             
            </Slider>
        </div>
        </Modal.Body>

        <Modal.Footer>
          {links}
        </Modal.Footer>
  
      </Modal>
    );
  }
}

export default ProjectDetailsModal;
