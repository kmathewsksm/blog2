import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";

export function Blogs() {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(postsResponse.data);
      } catch (error) {
        console.log("error in data fetching", error);
      }
    };

    const fetchPhotos = async () => {
      try {
        const postsResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setPhotos(postsResponse.data);
      } catch (error) {
        console.log("error in fetching photo", error);
      }
    };
    fetchPosts();
    fetchPhotos();
  }, []);

  return (
    <div>
      <h2>Blogs</h2>
      <Row>
        {posts.map((post, index) => (
          <Col key={post.id}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={photos[index % photos.length]?.url}
              />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
