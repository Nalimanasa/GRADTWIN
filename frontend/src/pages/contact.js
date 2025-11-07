import React from "react";

function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About the Project</h1>

      <section style={styles.section}>
        <h2> Existing System</h2>
        <p>
          The current system for aluminum extraction and by-product management is largely
          fragmented, relying on manual processes with minimal coordination among
          stakeholders. Agents involved in processing raw materials often use outdated
          methods to predict material outputs, which can result in inefficiencies and
          inaccurate assessments. Furthermore, there is no centralized platform to
          streamline the registration and approval process for agents and scrap
          management teams, causing delays in communication and workflow execution.
        </p><br/>
        <p>
          By-product management, including the handling of red mud and manganese alloys,
          is poorly optimized, leading to the underutilization of potentially valuable
          resources. The absence of automation and advanced analytical tools further
          exacerbates these challenges, as there is no integrated system to enhance the
          precision and efficiency of aluminum extraction and processing. Overall, the
          lack of a unified and intelligent solution hampers the effectiveness of the
          existing system.
        </p>
      </section>

      <section style={styles.section}>
        <h3>Disadvantages</h3>
        <ul>
          <li>Excessive Reinforcement: Overloads can compromise effectiveness.</li>
          <li>Data-Intensive: Requires large amounts of data and computation.</li>
          <li>Maintenance-Heavy: High maintenance adds operational complexity.</li>
          <li>Industrial Focus: Limited adaptability for small-scale use.</li>
          <li>Time-Consuming: The process duration remains long despite efficiency.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2> Proposed System</h2>
        <p>
          The proposed system is a powerful, user-focused platform aimed at optimizing
          the aluminum extraction and processing workflow while ensuring effective
          resource utilization. With secure, role-based access controls, the platform
          restricts participation to authorized users, safeguarding the system's
          integrity.
        </p>
        <p>
          To enhance efficiency, the platform integrates advanced predictive analysis to
          estimate aluminum yield prior to processing, enabling precise execution of the
          Bayer process for aluminum oxide production. The system also incorporates
          by-product management features, utilizing intelligent algorithms to identify
          potential applications for residues such as red mud and manganese, promoting
          sustainability and minimizing waste.
        </p>
        <p>
          Administrators are equipped with tools to oversee system operations, regulate
          user access, and coordinate communications across all processing stages. This
          results in a streamlined, environmentally conscious approach to aluminum
          production, fostering higher efficiency and better resource management.
        </p>
      </section>

      <section style={styles.section}>
        <h3> Advantages</h3>
        <ul>
          <li>Ease of Implementation: Simple deployment and training.</li>
          <li>Minimal Data Requirements: Needs limited data preparation.</li>
          <li>Versatility: Handles multiple outputs or use cases.</li>
          <li>Clarity: Easy to understand and interpret.</li>
          <li>Efficiency: Fast, smooth, and user-friendly operation.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2> Bottom Line and Future Enhancement</h2>
        <h3>Bottom Line</h3>
        <p>
          The proposed system effectively overcomes the challenges associated with
          resource recovery and optimization in aluminum extraction by delivering a
          secure, streamlined, and eco-conscious workflow. By leveraging predictive
          analytics, role-specific access controls, and advanced by-product management
          strategies, the system enhances aluminum yield while fostering sustainability.
        </p>
        <p>
          This approach minimizes waste and maximizes the potential of residual
          materials, ensuring that the extraction and processing methods are both
          cost-effective and environmentally friendly.
        </p>

        <h3>Future Work</h3>
        <p>
          Future developments will aim to extend the system’s functionality by
          integrating more sophisticated machine learning models to improve aluminum
          yield predictions and identify additional applications for by-products.
          Efforts will also focus on recovering other valuable materials from processing
          residues and adopting renewable energy solutions within production stages to
          enhance sustainability and efficiency.
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f9fafc",
    fontFamily: "Segoe UI, Arial, sans-serif",
    lineHeight: 1.7,
    color: "#333",
  },
  heading: {
    textAlign: "center",
    color: "#1a3e72",
    marginBottom: "30px",
  },
  section: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  },
};

export default Contact;
