# What is `liberate`?

`liberate` is a function that turns a method operating on a `this` value into a function explicitly taking that value as its first argument.

# What, that's it?

Yep! It's actually insanely useful in many circumstances.

Did you know that the non-mutating array methods actually work on any array-like? It's true! Many people are accustomed to using them like this:

    // Get the arguments to this function except the first.
    Array.prototype.slice.call(arguments, 1) 

But ew, what's with that `Array.prototype` and `call` junk? Why can't I just call it like a normal function? Well, you can:

    var liberate = require('liberate')
      , slice = liberate(Array.prototype.slice)
    slice(arguments, 1)

You still have to reference `Array.prototype.slice`, but you do it *once* and then you can slice as many things as you want without the verbosity.

# I looked at the source and it's just one line that's super scary-looking. Is this a joke?

No joke. `liberate` is legitimately useful. Why *not* make a module of it?

# It's so short, why not just define it wherever you use it?

While you're busy repeating yourself, I'll be busy actually coding.

# That's not an argument.

It's not? Oh well. Use the module or don't. It's up to you.

Why am I arguing with myself anyway?

# Credits

Ripped straight from [sinful.js](https://github.com/guipn/sinful.js/blob/master/sinful.js), as I found it useful on its own.
