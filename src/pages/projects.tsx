export default function Projects() {
    const projects = [
        { name: "Secure Notes Enterprise", tech: "Node.js, Kafka, Redis, K8s", link: "https://github.com/your-username/secure-notes" },
        { name: "E-Commerce Cloud Backend", tech: "Go, PostgreSQL, Kafka, AWS", link: "https://github.com/your-username/ecommerce" },
        { name: "Cybersecurity Lab", tech: "Docker, Terraform, Security Testing", link: "https://github.com/your-username/cyber-lab" },
    ]

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 p-12">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((proj) => (
                    <a key={proj.name} href={proj.link} target="_blank"
                        className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg">
                        <h2 className="text-xl font-semibold">{proj.name}</h2>
                        <p className="text-sm text-gray-600">{proj.tech}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}
