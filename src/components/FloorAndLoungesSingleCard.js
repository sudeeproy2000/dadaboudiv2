import React from "react";
import floorfirst from "../assets/floor-first.JPG";
import dadaboudilogo from "../assets/dadaboudi-logo.png";
import { Avatar, Card } from "antd";
import { Button } from "antd-mobile";
const { Meta } = Card;

const FloorAndLoungesSingleCard = ({ content }) => (
  <Card
    style={{
      width: 300,
    }}
    cover={<img alt="example" src={content.img} />}
    actions={[
      <div style={{ paddingInline: "8px" }}>
        <Button block style={{ backgroundColor: "#8a0221", color: "white" }}>
          View More
        </Button>
      </div>,
    ]}
  >
    <Meta
      avatar={<Avatar size={64} src={dadaboudilogo} />}
      title={content.name}
      description={content.description}
    />
  </Card>
);
export default FloorAndLoungesSingleCard;
