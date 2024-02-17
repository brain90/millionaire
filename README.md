# Millionaire
So, like, this project was all about putting bing copilot and GPT-3.5 to the test. We started off by making wireframes using excalidraw, then used those as prompts to get HTML and CSS designs. From there, it was all about adding functions by asking copilot and GPT-3.5 for help, little by little. Lesson learned: you still gotta have some programming know-how. Treat GPT as your buddy, not some kind of magic genie.


# Wireframe

![2024-02-14_14-03](https://github.com/brain90/millionaire/assets/858382/a816f7c5-73c0-486d-8d3f-ca289e4bbc9c)

# End Result

![2024-02-15_20-24](https://github.com/brain90/millionaire/assets/858382/7d81a713-a83f-4ae1-af67-c75a6b29d49b)

# Question generator
Prompt Bing Copilot with your desired topic. Here's the prompt we used. Put the json into `soal` directories.

<pre>Create 15 quiz question. A question with four multiple choices answer. topics: general knowledge. 
    made output as formatted json below. Put right answer into "correct" element. write in bahasa indonesia.
{
    "games": [
        {
            "questions": [
                {
                    "question": "In what children's game are participants chased by someone designated \"It\"?",
                    "content": [
                        "Tag",
                        "Simon Says",
                        "Charades",
                        "Hopscotch"
                    ],
                    "correct": 0
                }
            ]
        }
    ]
}
</pre>

# Installation

Just extract this repo into your htdocs directories.
