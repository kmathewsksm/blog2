import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

describe("tests for app.jsx", () => {
  it("should render home and blogs navigation links", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    const homeLink = screen.getByText(/home/i);
    const blogsLink = screen.getByText(/blogs/i);

    expect(homeLink).toBeInTheDocument();
    expect(blogsLink).toBeInTheDocument();
  });

  it("should navigate to home page and check relevant content", () => {
    render(
      <Router>
        <App />
      </Router>
    );

    fireEvent.click(screen.getByText(/home/i));

    const homeContent = screen.getByText(/Welcome to 'Devon blogs'/i);
    expect(homeContent).toBeInTheDocument;
  });

  it("should navigate to blogs page and check relevant content", async () => {
    render(
      <Router>
        <App />
      </Router>
    );

    fireEvent.click(screen.getByText(/blogs/i));

    const blogsContent = await screen.findByText(/blogs/i);
    expect(blogsContent).toBeInTheDocument();

    const postTitle = await screen.findByText(/post 1/i);
    expect(postTitle).toBeInTheDocument();
  });
});
