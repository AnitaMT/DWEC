from django.test import TestCase
from django.utils.timezone import now
from polls.models import Question, Choice


class QuestionModelTest(TestCase):
    def setUp(self):
        self.question = Question.objects.create(
            question_text='What is your favourite color? ',
            pub_date=now(),
        )

    def test_question_str(self):
        """Test the string representation of the Question model."""
        self.assertEqual(str(self.question), 'What is your favourite color? ')


class ChoiceModelTest(TestCase):
    def setUp(self):
        self.question = Question.objects.create(
            question_text='What is your favourite color? ',
            pub_date=now(),
        )
        self.choice = Choice.objects.create(
            question=self.question,
            choice_text='Purple ',
            votes=0,
        )
    def test_choice_str(self):
        """Test the string representation of the Choice model."""
        self.assertEqual(str(self.choice), 'Purple ')