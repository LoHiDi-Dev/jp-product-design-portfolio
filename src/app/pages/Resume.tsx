import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/about#resume', { replace: true });
  }, [navigate]);

  return null;
}
