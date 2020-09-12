# trop
Text to Poem Converter

## Installation

```sh

  npm i -g trop

```

## Usage

```sh

trop poem.txt

```

### Example #1 (messy HTML)

```html

<html>

  <head>

    <meta>

  </head>

<body>


  Kosmos
  By Walt Whitman

  ---

  Who includes diversity and is Nature,
  Who is the amplitude of the earth, and the coarseness and sexuality of the earth, and the great charity of the earth and the equilibrium also,
  Who has not look’d forth from the windows the eyes for nothing, or whose brain held audience with messengers for nothing,

  Who contains believers and disbelievers, who is the most majestic lover,
  Who holds duly his or her triune proportion of realism, spiritualism, and of the æsthetic or intellectual,
  Who having consider’d the body finds all its organs and parts good,

  Who, out of the theory of the earth and of his or her body understands by subtle analogies all other theories,
  The theory of a city, a poem, and of the large politics of these States;

  Who believes not only in our globe with its sun and moon, but in other globes with their suns and moons,

  ---

  Who, constructing the house of himself or herself, not for a day but for all time, sees races, eras, dates, generations,
  The past, the future, dwelling there, like space, inseparable together.

</body>
</html>


```
Output:

```html

<html>

  <head>

    <meta>

  </head>

  <body>


    <section>
      <p>Kosmos</p>
      <p>By Walt Whitman</p>
    </section>

    <section>
      <hr>
    </section>

    <section>
      <p>Who includes diversity and is Nature,</p>
      <p>Who is the amplitude of the earth, and the coarseness and sexuality of the earth, and the great charity of the earth and the equilibrium also,</p>
      <p>Who has not look’d forth from the windows the eyes for nothing, or whose brain held audience with messengers for nothing,</p>
    </section>

    <section>
      <p>Who contains believers and disbelievers, who is the most majestic lover,</p>
      <p>Who holds duly his or her triune proportion of realism, spiritualism, and of the æsthetic or intellectual,</p>
      <p>Who having consider’d the body finds all its organs and parts good,</p>
    </section>

    <section>
      <p>Who, out of the theory of the earth and of his or her body understands by subtle analogies all other theories,</p>
      <p>The theory of a city, a poem, and of the large politics of these States;</p>
    </section>

    <section>
      <p>Who believes not only in our globe with its sun and moon, but in other globes with their suns and moons,</p>
    </section>

    <section>
      <hr>
    </section>

    <section>
      <p>Who, constructing the house of himself or herself, not for a day but for all time, sees races, eras, dates, generations,</p>
      <p>The past, the future, dwelling there, like space, inseparable together.</p>
    </section>

  </body>

</html>


```

### Example #2 (plain text)

```html

Kosmos
By Walt Whitman

---

Who includes diversity and is Nature,
Who is the amplitude of the earth, and the coarseness and sexuality of the earth, and the great charity of the earth and the equilibrium also,
Who has not look’d forth from the windows the eyes for nothing, or whose brain held audience with messengers for nothing,

Who contains believers and disbelievers, who is the most majestic lover,
Who holds duly his or her triune proportion of realism, spiritualism, and of the æsthetic or intellectual,
Who having consider’d the body finds all its organs and parts good,

Who, out of the theory of the earth and of his or her body understands by subtle analogies all other theories,
The theory of a city, a poem, and of the large politics of these States;

Who believes not only in our globe with its sun and moon, but in other globes with their suns and moons,

---

Who, constructing the house of himself or herself, not for a day but for all time, sees races, eras, dates, generations,
The past, the future, dwelling there, like space, inseparable together.

```

Output

```html

<section>
  <p>Kosmos</p>
  <p>By Walt Whitman</p>
</section>

<section>
  <hr>
</section>

<section>
  <p>Who includes diversity and is Nature,</p>
  <p>Who is the amplitude of the earth, and the coarseness and sexuality of the earth, and the great charity of the earth and the equilibrium also,</p>
  <p>Who has not look’d forth from the windows the eyes for nothing, or whose brain held audience with messengers for nothing,</p>
</section>

<section>
  <p>Who contains believers and disbelievers, who is the most majestic lover,</p>
  <p>Who holds duly his or her triune proportion of realism, spiritualism, and of the æsthetic or intellectual,</p>
  <p>Who having consider’d the body finds all its organs and parts good,</p>
</section>

<section>
  <p>Who, out of the theory of the earth and of his or her body understands by subtle analogies all other theories,</p>
  <p>The theory of a city, a poem, and of the large politics of these States;</p>
</section>

<section>
  <p>Who believes not only in our globe with its sun and moon, but in other globes with their suns and moons,</p>
</section>

<section>
  <hr>
</section>

<section>
  <p>Who, constructing the house of himself or herself, not for a day but for all time, sees races, eras, dates, generations,</p>
  <p>The past, the future, dwelling there, like space, inseparable together.</p>
</section>

```
