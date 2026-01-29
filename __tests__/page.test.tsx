import { render, screen } from '@testing-library/react';
import CineMillenium from '@/app/page';

describe('Cine Millenium', () => {
  it('deve exibir os três filmes da trilogia', () => {
    render(<CineMillenium />);
    expect(screen.getByText(/A Sociedade do Anel/i)).toBeInTheDocument();
    expect(screen.getByText(/As Duas Torres/i)).toBeInTheDocument();
    expect(screen.getByText(/O Retorno do Rei/i)).toBeInTheDocument();
  });
});