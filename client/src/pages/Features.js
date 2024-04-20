import React from "react";
import { useRef } from "react";
import { Breadcrumb, Layout, Menu, theme, Card } from "antd";
import Layouts from "../components/Layouts";

export default function Features() {
  const cardsRef = useRef(null);
  const cards = [
    {
      title: "Resource Library",
      description:
        "Access a curated collection of resources, including articles, videos, and guides. Learn new skills and gain insights from expert mentors.",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: "Mentorship Chats",
      description:
        "Join chat groups to discuss topics, ask questions, and share experiences with mentors and peers.",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: "Career Guidance",
      description:
        "Get personalized advice on your career path. Mentors provide insights into various industries and help you plan your future.",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ];

  return (
    <Layouts>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          backgroundColor: "#E1F7F5",
          borderRadius: "16px",
        }}
      >
        <div className="container">
          <div
            ref={cardsRef}
            className="cards-section"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                hoverable
                style={{
                  width: 240, // Width of each card
                  margin: "80px", // Margin around each card
                }}
                cover={<img alt={card.title} src={card.imgSrc} />}
              >
                <Card.Meta title={card.title} description={card.description} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layouts>
  );
}
