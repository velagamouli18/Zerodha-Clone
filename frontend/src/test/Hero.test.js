// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Hero from '../landing_page/home/Hero';

// //Test Suite
// describe('Hero Component', () => {
//     test("renders hero image", () => {
//         render(<Hero />);
//         const heroImage = screen.getByAltText("Heroimage");
//         expect(heroImage).toBeInTheDocument();
//         expect(heroImage).toHaveAttribute("src",'media/images/homeHero.png');
//     });
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../landing_page/home/Hero';

describe('Hero Component', () => {
    test("renders hero image", () => {
        render(<Hero />);

        const heroImage = screen.getByAltText("Heroimage");

        expect(heroImage).toBeInTheDocument();

        expect(heroImage).toHaveAttribute(
            "src",
            expect.stringContaining("media/images/homeHero.png")
        );
    });
});