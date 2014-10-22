This module should be responsible for scraping websites, based on various inputs, sequences, and content types and return that content

Should return an array of objects, with content and metadata. 

sequences = {
	"click" : '.button-primary',
	"click" : '.button-secondary',
	"goback" : 'null', 
}

config = {
	
} 

Program interface: 

get index - input: url, selector(s), config - output: a list of urls, including paginated ones

get content - input: index, selector(s), config - output: array of objects containing clean content

config: 

index: 

pagination.string (for other archive pages)
pagination.max
sequence
urlurl

content: 
props = {
	title: '.h1-title',
	body: '.body',
	snippet: '.snippet',
	author: '.author-byline'	
};
content-cleanup-options
tokenized?
break : 'sentence', 'line', 'paragraph'
getters and setters would be fun