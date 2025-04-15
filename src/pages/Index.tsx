
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard page
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">OK Ekonomisk Förening</h1>
        <p className="text-xl text-muted-foreground">Loading your member dashboard...</p>
      </div>
    </div>
  );
};

export default Index;
