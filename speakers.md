---
layout: page
title:  Speakers
---

Guest speakers will be leading the discussion sessions and lead the projects. 

<br>






<style>
.spt{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-top:1rem}.sc{display:flex;flex-direction:column;align-items:center;border-radius:32px;padding:1rem;background:#fff;box-shadow:0 6px 6px rgba(0,0,0,0.0);transition:transform .25s ease,box-shadow .25s ease;text-align:left}.sc:hover{transform:scale(1.15);box-shadow:0 0px 20px rgba(0,0,0,0.12)}.sl{max-width:800px;margin-bottom:1.1rem}.sl img{width:100%;height:auto;border-radius:8px}.si h4{margin:0 0 .6rem;font-size:1.2rem;color:#333;text-align:center}.si p{margin:0;font-size:.95rem;color:#666;line-height:1.5;text-align:justify}.sln{text-decoration:none;color:inherit}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const speakersContainer = document.querySelector('.spt');
    if (speakersContainer) {
        const speakers = Array.from(speakersContainer.children);
        
        // Fisher-Yates shuffle algorithm
        for (let i = speakers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [speakers[i], speakers[j]] = [speakers[j], speakers[i]];
        }
        
        // Clear container and append shuffled speakers
        speakersContainer.innerHTML = '';
        speakers.forEach(speaker => {
            speakersContainer.appendChild(speaker);
        });
    }
});
</script>

<div class="spt">
    <div class="sc">
      <div class="sl"><a href="https://biocomputationlab.com/" target="_blank"><img src="/assets/images/speakers/angel.jpg" alt="Ángel Goñi-Moreno"></a></div>
      <div class="si">
        <h4><a class="sln" href="https://biocomputationlab.com/" target="_blank">Ángel Goñi-Moreno</a></h4>
        <p>Ángel Goñi-Moreno is the leader of the <a href="https://biocomputationlab.com/" target="_blank">Biocomputation Lab</a> which brings together computer science and synthetic biology to design, build and test living biological circuits. He combines theory with experiments to study how microbes and molecular systems process information, like environmental signals, and engineer new ways for them to do so.</p>
      </div>
    </div>



    <div class="sc">
      <div class="sl"><a href="https://scholar.google.com/citations?user=rD32w_EAAAAJ&hl=en" target="_blank"><img src="/assets/images/speakers/susan.jpg" alt="Susan Stepney"></a></div>
      <div class="si">
        <h4><a class="sln" href="https://scholar.google.com/citations?user=rD32w_EAAAAJ&hl=en" target="_blank">Susan Stepney</a></h4>
        <p>Susan Stepney is Professor at the <a href="https://www.cs.york.ac.uk/people/susan" target="_blank">University of York</a> in England and former director of <a href="https://www.york.ac.uk/yccsa/" target="_blank">York Cross-disciplinary Centre for Complex Systems.</a> Her works ranges from plasma physics to artificial life, in materio computing and complex systems. </p>
      </div>
    </div>

    <div class="sc">
      <div class="sl"><a href="https://www.alyssa-m-adams.com/" target="_blank"><img src="/assets/images/speakers/alyssa.jpg" alt="Alyssa M. Adams"></a></div>
      <div class="si">
        <h4><a class="sln" href="https://www.alyssa-m-adams.com/" target="_blank">Alyssa M. Adams</a></h4>
        <p>Alyssa M. Adams the deputy director of <a href="https://crosslabs.org/" target="_blank">Cross Labs</a>—a physicist and creative technologist whose career bridges ten startup ventures and more than fifteen years of community building. They believe artificial life represents a new technological paradigm with the capacity to transform our future.</p>
      </div>
    </div>


    <div class="sc">
      <div class="sl"><a href="https://znah.net/" target="_blank"><img src="/assets/images/speakers/alex.jpg" alt="Alexander Mordvintsev"></a></div>
      <div class="si">
        <h4><a class="sln" href="https://znah.net/" target="_blank">Alexander Mordvintsev</a></h4>
        <p>Alexander Mordvintsev is a researcher at Google's <a href="https://github.com/paradigms-of-intelligence" target="_blank"> Paradigms of Intelligence Team</a>. <a href="https://scholar.google.com/citations?user=A_HbzQMAAAAJ&hl=en" target="_blank">His work</a> focuses on differentiable self-organising systems, as well as tools to visualise and interpret the latent dynamics of systems of neural networks.
        </p>
      </div>
    </div>

    <div class="sc">
      <div class="sl"><a href="https://erallab.inginf.units.it/" target="_blank"><img src="/assets/images/speakers/eric2.jpg" alt="Eric Medvet"></a></div>
      <div class="si">
        <h4><a class="sln" href="https://medvet.inginf.units.it/" target="_blank">Eric Medvet</a></h4>
        <p>Eric Medvet is the  head of the  <a href="https://erallab.inginf.units.it/" target="_blank">Evolutionary Robotics and Artificial Life Lab</a>  and the co-head of the <a href="https://machinelearning.inginf.units.it/" target="_blank">Machine Learning Lab</a>. His research focuses on Evolutionary Computation, Machine Learning, and their application to computer- and engineering-related topics. </p>
      </div>
    </div>

    <div class="sc">
      <div class="sl"><a href="https://www.mn.uio.no/ifi/english/people/aca/kyrrehg/" target="_blank"><img src="/assets/images/speakers/kyrre.jpg" alt="Kyrre Glette"></a></div>
      <div class="si">
        <h4><a class="sln" href="https://www.mn.uio.no/ifi/english/people/aca/kyrrehg/" target="_blank">Kyrre Glette</a></h4>
        <p>Kyrre Glette is a Professor at <a href="https://www.mn.uio.no/ifi/english/research/groups/robin/" target="_blank">Robotics and Intelligent Systems (ROBIN) group</a>, as well as at <a href="https://www.uio.no/ritmo/english/" target="_blank">RITMO Centre for Interdisciplinary Studies in Rhythm, Time and Motion</a>  at the University of Oslo, Norway. His research focuses on AI for robot design, adaptivity, and creativity.</p>
      </div>
    </div>



    <div class="sc">
      <div class="sl"><a href="https://www.nichele.eu/" target="_blank"><img src="/assets/images/speakers/stefano.jpg" alt="Stefano Nichele"></a></div>
      <div class="si">
        <h4><a class="sln" href="https://www.nichele.eu/" target="_blank">Stefano Nichele</a></h4>
        <p>Stefano Nichele is Professor at <a href="https://www.hiof.no/iio/itk/english/people/aca/stefanon/" target="_blank">Østfold University College</a> in Norway. His work aim at understanding how life (and intelligence) can emerge in machines as it does in biological organisms, and how to create machines that are more adaptive, alive, and generally intelligent. </p>
      </div>
    </div>


</div>


