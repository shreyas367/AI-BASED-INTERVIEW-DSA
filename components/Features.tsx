import FeatureCard from "@/components/FeatureCard";
import { Brain, Zap, TrendingUp } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid gap-8 md:grid-cols-3">
        <FeatureCard
          icon={Brain}
          title="AI Question Generation"
          description="Dynamic questions tailored to your skill level and target role."
        />
        <FeatureCard
          icon={Zap}
          title="Instant Evaluation"
          description="Get detailed feedback on your answers within seconds."
        />
        <FeatureCard
          icon={TrendingUp}
          title="Progress Analytics"
          description="Track improvement and identify weak areas to focus on."
        />
      </div>
    </section>
  );
}
