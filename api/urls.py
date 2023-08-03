from django.urls import path
from . import views

urlpatterns = [
        path("notes/", views.AllNotes.as_view(), name="notes"),
        path("notes/", views.CreateNote.as_view(), name="Create notes"),
        path('notes/<int:id>/', views.SingleNote.as_view(), name='note_detail'),
]