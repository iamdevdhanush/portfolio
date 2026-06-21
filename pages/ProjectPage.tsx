import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ProjectDetailPage from '../components/ProjectDetailPage';
import { projects } from '../data/projects';
import { projectSEO } from '../data/seo';
import { breadcrumbSchema, projectSchema } from '../data/structuredData';

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  const seo = slug ? projectSEO[slug] : undefined;

  if (!project || !seo) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEO
        {...seo}
        jsonLd={[
          projectSchema(project),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Projects', url: '/#projects' },
            { name: project.title, url: `/project/${project.slug}` },
          ]),
        ]}
      />
      <ProjectDetailPage project={project} allProjects={projects} />
    </>
  );
};

export default ProjectPage;
