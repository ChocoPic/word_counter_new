document.addEventListener('DOMContentLoaded', function() {

    function registerTextareaEventHandler(section){
        var textarea = section.querySelector('textarea');
        var charCountWithSpace = section.querySelector('.charCountWithSpace');
        var charCountWithoutSpace = section.querySelector('.charCountWithoutSpace');
        var lineCount = section.querySelector('.lineCount');
        var wordCount = section.querySelector('.wordCount');
        var sentenceCount = section.querySelector('.sentenceCount');
        var byteCount = section.querySelector('.byteCount');
            
        textarea.addEventListener('input', function() {
            var text = this.value;
    
            // 글자수(공백 포함)
            var charWithSpace = text.length;
            charCountWithSpace.textContent = '공백 포함(일반적인 글자 수): ' + charWithSpace;
    
            // 공백 제외한 글자수
            var charWithoutSpace = text.replace(/\s+/g, '').length;
            charCountWithoutSpace.textContent = '공백 제외: ' + charWithoutSpace;
    
            // 줄바꿈 개수
            var lines = text.split(/\r\n|\r|\n/).length;
            lineCount.textContent = '줄바꿈 개수: ' + lines;
    
            // 단어 수
            var words = text.split(/\s+/).filter(function(word) {
                return word.length > 0;
            }).length;
            wordCount.textContent = '단어 수: ' + words;
    
            // 문장 수 (단순히 마침표의 개수로 계산)
            var sentences = text.split('.').length - 1;
            sentenceCount.textContent = '문장 수: ' + sentences;
    
            // 바이트 수 (한글 2바이트, 영문 1바이트로 계산)
            var bytes = encodeURI(text).split(/%..|./).length - 1;
            byteCount.textContent = '바이트(byte) 수: ' + bytes;
        });
    }

    // 초기 textarea에 대한 이벤트 핸들러 등록
    var sections = document.querySelectorAll('.section1, .section2, .section3, .section4');
    // var sectionArr = Array.from(sections);
    sections.forEach(section => {
        registerTextareaEventHandler(section)        
    });
});
