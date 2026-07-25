<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'description' => fake()->paragraph(),
            'category' => fake()->randomElement(['Engineering', 'Marketing', 'Design']),
            'tech_stack' => ['PHP', 'Laravel', 'React', 'Tailwind', 'Python'],
            'live_url' => fake()->url(),
            'repo_url' => fake()->url(),
            'image_path' => 'projects/' . fake()->word() . '.jpg',
            'order' => fake()->numberBetween(1, 10),
        ];
    }
}
