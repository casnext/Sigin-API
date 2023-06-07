interface NewRecommendation {
    name: string,
    youtubeLink: string,
}

interface RecommendationWithScore extends NewRecommendation {
    score: number,
}

interface RandomRecommendation {
    id: number,
    name: string,
    youtubeLink: string,
    score: number,
}

export {
    NewRecommendation,
    RecommendationWithScore,
    RandomRecommendation,
}