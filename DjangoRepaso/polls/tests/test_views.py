from django.test import TestCase
from django.urls import reverse
from django.utils.timezone import now
from polls.models import Question

class IndexViewTests(TestCase):
    def setUp(self):
        self.question = Question.objects.create(
            question_text='Question 1',
            pub_date=now(),
        )
        self.question_2 = Question.objects.create(
            question_text='Question 2',
            pub_date=now(),
        )

    def test_index_view(self):
        """Test the index view list questions."""
        response = self.client.get(reverse('polls:index'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Question 1')
        self.assertContains(response, 'Question 2')