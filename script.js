// Load the JSON data when the document is ready
$(document).ready(function() {
    $.getJSON('dufan.json', function(data) {
        let questionIndex = 0;
        let questions = data.games[0].questions;

        // Add labels below the progress bar
        for (let i = 1; i <= 15; i++) {
            $('#labels').append('<span>' + i + '</span>');
        }

        function loadQuestion() {
            let question = questions[questionIndex];
            $('#question').text(question.question);
            $('#options').empty();
            for (let i = 0; i < question.content.length; i++) {
                var is_answer = (i === question.correct) ? 1 : 0;
                var btn = `<div class="col-6"><button class="answer btn btn-primary btn-block mb-2" id="opt-${i}" data-is-answer="${is_answer}"></button></div>`;
                var option = $(btn).text(question.content[i]);

                option.click(function() {
                    if (i === question.correct) {
                        moveProgressBar();

                        // sound
                        sound('background','pause')
                        sound('right','play')

                        questionIndex++;
                        if (questionIndex < questions.length) {
                            loadQuestion();
                            setTimeout(function() {
                                sound('background','play')
                            }, 4000);
                        } else {
                            $('#background').remove()
                            sound('win','play')
                            menang()
                            return
                        }
                    } else {
                        // game over
                        $('#progress-bar').css('width','100%').removeClass('progress-bar-custom').addClass('bg-danger')
                        // sound
                        sound('background','pause')
                        sound('wrong','play')

                        // hint the correct answer
                        $('.answer').each(function(e) {
                            if ($(this).data('is-answer') == 1) 
                            {
                                $(this).removeClass('btn-primary').addClass('btn-success')
                            }        
                        })

                        setTimeout(function() {
                            location.reload()
                        }, 3000);
                    }
                });
                $('#options').append(option);
            }
        }

        loadQuestion();
    });
});

// Move the progress bar when a button is clicked
function moveProgressBar() {
    let progressBar = $('#progress-bar');
    let width = progressBar.width();
    let parentWidth = progressBar.parent().width();
    let percent = (width / parentWidth) * 100;

    // Increase the progress by 6.67% (100% divided by 15 steps)
    percent += 6.67;
    progressBar.css('width', percent + '%');
}

$('#fifty').click(function() {
    $('.answer').each(function(e) {
        if ($(this).data('is-answer') === '1') 
        {
            $(this).attr('disabled','disabled')
        }        
    })
})

startSound = function(id, loop) {
    soundHandle = document.getElementById(id);
    if(loop)
        soundHandle.setAttribute('loop', loop);
    soundHandle.play();
}

function sound(id, control) {
    // Get the audio element by id
    var audio = document.getElementById(id);

    // Check the control parameter and perform the corresponding action
    switch(control) {
        case 'play':
            // Play the audio
            audio.play();
            break;
        case 'pause':
            // Pause the audio
            audio.pause();
            break;
        default:
            console.log('Invalid control command');
    }
}

$(document).ready(function() {
    startSound('background', true)
})

function menang() {
    $('#games').hide()
    $('body').css('background-color', '#000').css('overflow', 'hidden');
    $('.message').text(selamat())
    $('#menang').show()
    setInterval(createFirework, 500);
}

function selamat() {
    const praises = [
        "Hebat!",
        "Luar Biasa!",
        "Keren!",
        "Pintar!",
        "Brilian!",
        "Fantastis!",
        "Sempurna!",
        "Menakjubkan!",
        "Mengagumkan!",
        "Cemerlang!"
    ];
    return praises[Math.floor(Math.random() * praises.length)]
}

function createFirework() {
    const colors = ['#ff5733', '#ffc300', '#2ecc71', '#3498db'];
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.top = Math.random() * window.innerHeight + 'px';
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(firework);
    setTimeout(() => {
        firework.remove();
    }, 1000);
}
