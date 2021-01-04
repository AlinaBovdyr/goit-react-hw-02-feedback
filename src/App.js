import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';

export default function App() {
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions />
        <Statistics
          good={2}
          neutral={1}
          bad={1}
          total={3}
          positivePercentage={50}
        />
      </Section>
    </div>
  );
}
