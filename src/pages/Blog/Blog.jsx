import React from "react";

const Blog = () => {
  return (
    <div className="space-y-4 my-10">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-cyan-500">
          # What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h1>
        <p className="text-lg font-medium">
          Access tokens and refresh tokens are used for authentication and
          authorization. Access tokens are short-lived and used to access
          protected resources on the server. Refresh tokens are long-lived and
          used to obtain new access tokens when the current ones expire. They
          work together to ensure secure and controlled access to protected
          resources. To store them on the client-side, use browser storage
          mechanisms like cookies or local storage. Ensure they are stored
          securely and not accessible to third-party scripts or attackers.
        </p>
      </div>
      <div className="space-y-4 ">
        <h1 className="text-2xl font-semibold text-cyan-500">
          # Compare SQL and NoSQL Databases?
        </h1>
        <p className="text-lg font-medium">
          SQL databases are relational and structured, using tables with
          predefined columns and rows. NoSQL databases are non-relational and
          unstructured, using documents or key-value pairs. SQL databases are
          good for complex queries and data consistency, but require more
          planning and management. NoSQL databases are flexible and scalable,
          but may sacrifice data consistency and require more expertise.
        </p>
      </div>
      <div className="space-y-4 ">
        <h1 className="text-2xl font-semibold text-cyan-500">
          # What is express js? What is Nest JS?
        </h1>
        <p className="text-lg font-medium">
          ExpressJS is a popular Node.js web application framework used for
          building APIs and web applications. NestJS is a newer Node.js
          framework built on top of ExpressJS, providing additional features
          like dependency injection and support for TypeScript. Both frameworks
          are used to simplify server development, but NestJS provides more
          out-of-the-box features for enterprise-level applications. ExpressJS
          is a good choice for smaller projects or when more control over the
          code is desired.
        </p>
      </div>
      <div className="space-y-4 ">
        <h1 className="text-2xl font-semibold text-cyan-500">
          # What is MongoDB aggregate and how does it work ?
        </h1>
        <p className="text-lg font-medium">
          MongoDB aggregate is a feature that allows complex data analysis and
          manipulation using a pipeline of stages. It works by processing data
          through a series of operations, including filtering, grouping,
          sorting, and transforming. The results of each stage are passed to the
          next stage, allowing for powerful data manipulation. Aggregate is
          useful for working with large datasets and performing complex queries
          that cannot be done with simple CRUD operations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
