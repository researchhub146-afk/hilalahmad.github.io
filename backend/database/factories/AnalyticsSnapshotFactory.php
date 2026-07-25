<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\AnalyticsSnapshot>
 */
class AnalyticsSnapshotFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'metric_name' => fake()->randomElement(['Ad Spend Managed', 'Code Commits', 'Leads Generated', 'ROI Improvement']),
            'metric_value' => fake()->numberBetween(100, 1000000),
            'icon' => fake()->randomElement(['trending-up', 'code', 'users', 'dollar-sign']),
            'category' => fake()->randomElement(['Marketing', 'Engineering', 'Overall']),
        ];
    }
}
