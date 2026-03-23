import React from 'react';
import { Navigate } from 'react-router-dom';

const NewsletterPage: React.FC = () => <Navigate to="/blog#newsletter-archive" replace />;

export default NewsletterPage;
